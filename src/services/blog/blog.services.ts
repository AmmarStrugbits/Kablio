import FindingYourNextJob from '@/assets/images/blog/ImageTopics/FindingYourNextJob.png'
import ForEmployers from '@/assets/images/blog/ImageTopics/ForEmployers.png'
import ForRecruitmentConsultants from '@/assets/images/blog/ImageTopics/ForRecruitmentConsultants.png'
import Apprenticeships from '@/assets/images/blog/ImageTopics/Apprenticeships.png'
import GrowthDevelopment from '@/assets/images/blog/ImageTopics/GrowthDevelopment.png'
import StudentsAndRecentGrads from '@/assets/images/blog/ImageTopics/StudentsAndRecentGrads.png'
import KablioAnnouncements from '@/assets/images/blog/ImageTopics/KablioAnnouncements.png'
import Society from '@/assets/images/blog/ImageTopics/Society.png'
import WorkLife from '@/assets/images/blog/ImageTopics/WorkLife.png'
import { StaticImageData } from 'next/image'

export interface Topic {
    title: string;
    image: StaticImageData;
    tag: string
}

export const topics: Topic[] = [
    {
        title: 'Engineering & Design Jobs',
        image: FindingYourNextJob,
        tag: 'engineering-design-jobs'
    },
    {
        title: 'Technicians & Tradespersons',
        image: Apprenticeships,
        tag: 'technicians-tradespersons'
    },
    {
        title: 'Students & Recent Grads',
        image: StudentsAndRecentGrads,
        tag: 'students-and-recent-grads'
    },
    {
        title: 'Construction Management Jobs',
        image: GrowthDevelopment,
        tag: 'construction-management-jobs'
    },
    {
        title: 'Work-Life',
        image: WorkLife,
        tag: 'work-life'
    },
    {
        title: 'Society',
        image: Society,
        tag: 'society'
    },
    {
        title: 'For Employers',
        image: ForEmployers,
        tag: 'for-employers'
    },
    {
        title: 'For Recruitment Agencies',
        image: ForRecruitmentConsultants,
        tag: 'for-recruitment-agencies'
    }
    ,
    {
        title: 'Kablio Announcements',
        image: KablioAnnouncements,
        tag: 'kablio-announcements'
    },
];

