import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Brand extends Document {
  @Prop()
  image: string;

  @Prop({ required: true, unique: true })
  name: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
