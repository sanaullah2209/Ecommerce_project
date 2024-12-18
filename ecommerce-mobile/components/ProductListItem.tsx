import { Pressable, Text } from "react-native";
import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { Heading } from "./ui/heading";
import { Link } from "expo-router";

export default function ProductListItem({product}:any) {
  // console.log(" Render Product");
    return( 
        <>
       <Link href={`/product/${product.id}`} asChild>
       <Pressable className="flex-1">
    <Card className="p-5 rounded-lg flex-1">
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>
          <Heading size="md" className="mb-4">
            {product.price}
          </Heading>
   
      </Card>
      </Pressable>
      </Link>

    </>  
    )

}