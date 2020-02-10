import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class SEOResult {
  @Field()
  title: string
  @Field()
  description: string
  @Field({ nullable: true })
  author: string
  @Field({ nullable: true })
  keywords: string
  @Field()
  heading1: string
  @Field()
  totalHeadings: number
  @Field()
  imgAccessibility: number
}