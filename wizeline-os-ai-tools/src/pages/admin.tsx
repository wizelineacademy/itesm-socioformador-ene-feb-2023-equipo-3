import NewProject from "@/components/Admin/NewProject";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function admin() {
    return(
        <div className="-bg-orange-500">
            <div className="bg-black w-full h-20">
                pseudoNavbar
            </div>
            
            <NewProject></NewProject>
        </div>
    )
}