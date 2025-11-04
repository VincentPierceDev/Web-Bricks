import Layout from "@/app/webpage-layout";

function IndexPage(){
    const title: string = "Home • Webbricks";
    const description: string = "This is the home page";    

    return(
        <Layout metaData={{title: title, description: description}}>
            <h1>{title}</h1>
        </Layout>
    )
}

export default IndexPage;