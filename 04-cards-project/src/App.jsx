import React from 'react'
import Card from './components/card'
const App = () => {
  const jobs = [
  {
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid-Level Developer",
    payment: "$85/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://imgs.search.brave.com/6MSQX_x5lcJ8I0nm1LeM6of8SZhLk5rlRb47GHf2XXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9j/b2xvci8xMjAwL21p/Y3Jvc29mdC5qcGc",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    payment: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid-Level Developer",
    payment: "$78/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    company: "Meta",
    datePosted: "4 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    payment: "$110/hr",
    location: "Gurugram, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid-Level Developer",
    payment: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    payment: "$120/hr",
    location: "Pune, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    payment: "$125/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    company: "Oracle",
    datePosted: "1 week ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Developer",
    payment: "$65/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    company: "Salesforce",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid-Level Developer",
    payment: "$82/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    company: "IBM",
    datePosted: "2 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    payment: "$90/hr",
    location: "Bengaluru, India"
  }
];

        
  return (
 
    <div className='parent'>
      {jobs.map(function(ele,idx){

     return <div key ={idx}>
        <Card logo ={ele.logo} company= {ele.company} payment ={ele.payment} date ={ele.datePosted} poat ={ele.post} tag1={ele.tag1} tag2={ele.tag2} location ={ele.location}/>
      </div>
      })}

    </div>
  )

}

export default App
  
