import NewProject from "@/components/Admin/NewProject";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function admin() {
    const [tabIndex, setTabIndex] = useState(0);
    return(
        <div className="-bg-orange-500">
            <div className="bg-black w-full h-20">
                pseudoNavbar
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
                <TabList>
                    <Tab>Colaborators</Tab>
                    <Tab>Projects</Tab>
                </TabList>
                <TabPanel>
                    Nada
                </TabPanel>
                <TabPanel>
                    <div className="my-8">
                        <NewProject/>
                    </div>
                </TabPanel>
            </Tabs>
            
        </div>
    )
}