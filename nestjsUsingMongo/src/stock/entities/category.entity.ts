import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Category extends Document {
  @Prop()
  description: string;

  @Prop({ required: true, index: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
