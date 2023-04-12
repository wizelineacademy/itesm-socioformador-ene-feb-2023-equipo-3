import EditButton from "./EditButton";

export const pastworks = [{
    id: 0,
    title: 'Web Developer',
    date: 'May 2019 - Nov 2019',
    description: "I am in charge of the company website's full-stack development and maintenance. The job entails creating and maintaining a website from the ground up. In addition, I am the only Web Developer in this company."
}, {
    id: 1, 
    title: 'Software Engineer Intern', 
    date: 'Jun 2018 - Aug 2018', 
    description: "As a Software Engineer Intern, I worked on a team developing an e-commerce platform for a startup. My responsibilities included building the front-end UI using React and designing and implementing the back-end API using Node.js and MongoDB."
}, {
    id: 2, 
    title: 'Backend Developer', 
    date: 'Jan 2020 - Aug 2020', 
    description: "As a Backend Developer, I was responsible for developing and maintaining the server-side logic for a web application. My main focus was on building RESTful APIs using Python and Flask. I also worked on database design and optimization using PostgreSQL."
}, {
    id: 3, 
    title: 'Mobile App Developer', 
    date: 'Nov 2017 - Apr 2018', 
    description: "As a Mobile App Developer, I worked on a team developing a cross-platform mobile app for a logistics company. My responsibilities included building and testing the app using React Native and integrating it with the company's existing APIs."
}, {
    id: 4, 
    title: 'Full Stack Developer', 
    date: 'Sep 2019 - Dec 2019', 
    description: "As a Full Stack Developer, I worked on a team developing a web application for a financial services company. My responsibilities included building the front-end UI using Angular and designing and implementing the back-end API using Node.js and PostgreSQL."   
}, {
    id: 5, 
    title: 'DevOps Engineer', 
    date: 'Mar 2021 - Present', 
    description: "As a DevOps Engineer, I am responsible for managing the infrastructure and deployment pipelines for a cloud-based SaaS platform. My main focus is on building and maintaining CI/CD pipelines using Jenkins and deploying to Kubernetes clusters on AWS."
}];




export function PastWorkItem({pastwork}: any) {
    return (
        <div className="flex flex-row gap-2 pr-10 pt-5 pb-5 first:pt-0 last:pb-0">
            <div className="mt-2 w-5 h-5 bg-red-500 rounded-full"></div>
            <div>
                <h1 className="text-lg font-semibold text-slate-800">{pastwork.title}</h1>
                <h2 className="text-sm font-normal text-slate-500">{pastwork.date}</h2>
                <p className="text-base font-light">{pastwork.description}</p>
            </div>
        </div>
    )
}




export default function PastWork() {
    const listItems = pastworks.map(pastwork =>
       <PastWorkItem pastwork={pastwork}/>
    );
  return (
    <div>
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-3">Past Work</h1>
            <EditButton/>
        </div>
        <div className="grid grid-cols-1 divide-y divide-slate-100 mr-5">
            {listItems}
        </div>

    </div>
  )
}