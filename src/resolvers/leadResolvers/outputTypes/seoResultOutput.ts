import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class SEOResult {
  @Field({ nullable: true })
  title: string
  @Field({ nullable: true })
  description: string
  @Field({ nullable: true })
  author: string
  @Field({ nullable: true })
  keywords: string
  @Field({ nullable: true })
  heading1: string
  @Field({ nullable: true })
  totalHeadings: number
  @Field({ nullable: true })
  imgAccessibility: number
}