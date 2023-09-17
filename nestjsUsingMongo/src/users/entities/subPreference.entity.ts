import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubPreference {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const SubPreferenceSchema = SchemaFactory.createForClass(SubPreference);
