import { sessionCounterAdder, statsLogger } from "./utility.js";

/*
  @param {Object} content

  @description:
    Handle with information from @param {Object} content to
  generate an image using a given data from a data-attribute
  called 'dataset.src' added by images creation process, then
  untrack content using a default observer

  @Note: This function works only on default observer context
*/
const contentHandler = (content) => {
  // Some stats about content load process
  sessionCounterAdder("loadedContent");
  statsLogger([
    ["Images loaded", "loadedContent"],
    ["Images created", "contentCounter"],
  ]);

  const target = content.target;
  const image = target.firstChild;
  image.src = image.dataset.src;

  untrackContent(target);
};

/*
  @param {Object} entry

  @description:
    This threshold is used by a filter, the @param {Object}
  entry criteria is an IntersectionObserver Object, so return
  true when match the IntersectionObserver view limit
*/
const contentThreshold = (entry) => entry.isIntersecting;

/*
  @param {IntersectionObserver entry} entries
  @param {function} threshold
  @param {function} handler

  @description:
    A function that follows IntersectionObserver structure to
  filter entries that match a threshold, doing some stuff with
  them
*/
const contentFilter = (entries, threshold, handler) => {
  entries.filter(threshold).forEach(handler);
};

/*
  @param {function} filterTrackedContent
  @param {function} contentThreshold
  @param {function} contentHandler

  @description:
    It creates an IntersectionObserver instance, using some
  generic functions, @param {function} filterTrackedContent
  defines a filter to get specific content that matches the
  @param {function} contentThreshold this is also generic, 
  then uses a generic @param {function} contentHandler to do
  some stuff
*/
const generateTracker = (
  filterTrackedContent,
  contentThreshold,
  contentHandler
) => {
  const observerTracker = new IntersectionObserver((entries) =>
    filterTrackedContent(entries, contentThreshold, contentHandler)
  );
  return observerTracker;
};

// Observer handlers

/*
  @param {HTML Object} targetContent 
  @param {IntersectionObserver Instance} targetObserver

  @description:
    Track an specific HTML node (@param {HTML Object}
  targetContent) using default observer or @param {IntersectionObserver
  Instance} targetObserver
*/
const trackContent = (targetContent, targetObserver) => {
  if (targetObserver === undefined) {
    targetObserver = observer;
  }
  targetObserver.observe(targetContent);
};


/*
  @param {HTML Object} targetContent 
  @param {IntersectionObserver Instance} targetObserver

  @description:
    Untrack an specific HTML node (@param {HTML Object}
  targetContent) using default observer or @param {IntersectionObserver
  Instance} targetObserver
*/
const untrackContent = (targetContent, targetObserver) => {
  if (targetObserver === undefined) {
    targetObserver = observer;
  }
  targetObserver.unobserve(targetContent);
};

// Generic observer instance

const observer = generateTracker(
  contentFilter,
  contentThreshold,
  contentHandler
);

export {
  observer,
  generateTracker,
  contentFilter,
  contentThreshold,
  contentHandler,
  untrackContent,
  trackContent,
};
