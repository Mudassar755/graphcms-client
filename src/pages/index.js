import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome'
import Features from '../components/Features';
import Brands from '../components/Brands';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import AOS from 'aos';
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh();
    }, [])
    // const data = useStaticQuery(blogQuery)
    // console.log("datat", data)

    return (
        <Layout>
            {/* <SEO title="Home" description="this is our home page" /> */}
            {/* <Hero /> */}
            {/* <Services /> */}
            {/* <Jobs /> */}
            {/* <Projects projects={projects} title="featured projects" showLink /> */}
            {/* <Blogs blogs={blogs} title="latest articles" showLink /> */}
            <Welcome />
            <Features />
            <Brands />
            <About />
            {/* <Testimonials /> */}
            <Stats />
            <Pricing />
            <Faqs />
            <CTA />

        </Layout>
    )
}

// const blogQuery = graphql`
//  {
//      blogs:allGraphCmsBlog{
//         nodes {
//             title

//           }
//         }
//     }

//  `;

export default Home;