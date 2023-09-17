const socket = io.connect('http://localhost:3000', {
  forceNew: true,
});

socket.on('message', (data) => {
  console.log(data);
});
