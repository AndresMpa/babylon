import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
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

  @Prop(
    raw({
      name: {
        type: String,
      },

      description: {
        type: String,
      },
    }),
  )
  category: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ price: 1, stock: -1 });
