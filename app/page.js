import React from 'react';
import Navbar from "@/components/common/navbar";
import {Hero} from "@/components/common/hero";
import Aboutme from "@/components/pages/aboutme";
import History from "@/components/pages/hestory";
import {Project} from "@/components/pages/project";
import Contact from "@/components/pages/contact";

const Page = () => {
    return (
        <div>
          <Navbar/>
            <Hero/>
            <Aboutme/>
            <History/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default Page;