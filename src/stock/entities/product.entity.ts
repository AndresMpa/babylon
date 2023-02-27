import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  stock: number;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ price: 1, stock: -1 })
