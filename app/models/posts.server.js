export async function getPosts() {
  try {
    const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(url){
  try {
      const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
      const data = await res.json();
      
      return data.data;
    } catch (error) {
      console.log(error);
    }
}