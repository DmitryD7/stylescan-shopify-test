import Layout from "../components/Layout.server";

export default function Home() {

    return (
        <Layout>
            <div className="home-page container">
                <div className='home-page-gr'></div>
                <h1>Welcome to StyleScan Store!</h1>
            </div>
        </Layout>
    );
}