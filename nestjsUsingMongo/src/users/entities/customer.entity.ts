import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { SubPreference, SubPreferenceSchema } from './subPreference.entity';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop({
    type: [SubPreferenceSchema],
  })
  preferences: Types.Array<SubPreference>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
