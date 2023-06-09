import Layout from "../components/layout";
import { getAllPostIds } from "./posts";

export default function Post() {
    return <Layout>...</Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {

}