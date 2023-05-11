export async function getGuitarras(){
    try {
        const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
        const data = await res.json();
        
        return data;
      } catch (error) {
        console.log(error);
      }
}
export async function getGuitarra(url){
    try {
        const res = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
        const data = await res.json();
        
        return data;
      } catch (error) {
        console.log(error);
      }
}