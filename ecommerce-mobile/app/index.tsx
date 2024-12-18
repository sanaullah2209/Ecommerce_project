import { ActivityIndicator, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Text } from "@/components/ui/text";

export default function HomeScreen(){

  // const [products, setProduct] = useState();


  // useEffect(() => {
  //   const fetchProduct = async() =>{
  //     const res = await listProducts();
  //     setProduct(res);
  //   }
  //   fetchProduct();
  // },[])
  
const  {data,isLoading,error} = useQuery({queryKey:['product'],queryFn:listProducts})








const numColumns = useBreakpointValue({
  default:2,
  sm:3,
  xl:4,
})

if(isLoading) {
  return <ActivityIndicator/>
}
if(error){
  return <Text>error</Text>
}

return(
      <FlatList
      key={numColumns}
      numColumns={numColumns}
     contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
     columnWrapperClassName="gap-2"
      data={data}
      renderItem={({item}) => <ProductListItem product={item}/>}
      
      />
    )
}