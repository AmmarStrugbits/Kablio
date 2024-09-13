import { ExperienceLevel } from '@/shared/enum/ExperienceLevel.enum';
import { ContractType } from '../enum/ContractType.enum';
import { SocialMediaEmbeddable } from './SearchPreference.interfaces';
import { ThumbUpSharp, TransferWithinAStation } from '@mui/icons-material';
import { Currency } from '../enum/Currency.enum';

export interface ExternalLink {
    title: string;
    url: string;
}

export type ContentElement = {
    type: 'list' | 'paragraph';
    data: string[] | string;
};

export interface PublicFileEmbeddable {
    key: string;
    contentType: string;
    url: string;
    size: number;
    originalname: string;
    sourceUrl: string;
}

export interface RecruiterFirmDTO {
    socialMedia?: SocialMediaEmbeddable;
}
export interface JobPostDto {
    id: string;

    // Header
    companyName: string | null;
    recruiterFirmName: string | null;
    title: string;
    logo: PublicFileEmbeddable;
    url: string;
    contractType: ContractType;
    experienceLevel: ExperienceLevel;
    roleFocus: string;
    remote: boolean;
    location: string;
    dateRange: string | null;
    minSalary: number;
    maxSalary: number | null;
    OneLineOverview: string;
    nbOfEmployees: string | null;
    serviceSpecialisms: string[] | null;
    sectorSpecialisms: string[] | null;
    currency: Currency | null;

    // The Role
    whatYouBring: string;
    tasks: string;
    benefits: string | null;
    trainingDevelopment: string | null;
    workEnvironment: string;

    // The Role / Other
    interviewProcess: string | null;
    visaSponsorchip: string | null;
    securityClearance: string | null;

    // The company
    Overview: string;
    cultureValues: string | null;
    environmentSustainability: string | null;
    inclusionDiversity: string | null;

    // The recruiter
    recruiterFirmOverview: string | null;
    recruiterOverview: string | null;
    recruiterSocialMedia: SocialMediaEmbeddable | null;
    recruiterFirmSocialMedia: SocialMediaEmbeddable | null;

    // Articles
    externalLinks: ExternalLink[] | null;
}

export class JobPostClass {
    id: string;

    // Header
    companyName: string | null;
    recruiterFirmName: string | null;
    title: string;
    logo: PublicFileEmbeddable;
    url: string;
    contractType: ContractType;
    experienceLevel: ExperienceLevel;
    roleFocus: string;
    remote: boolean;
    location: string;
    dateRange: string | null;
    minSalary: number;
    maxSalary: number | null;
    OneLineOverview: string;
    nbOfEmployees: string | null;
    serviceSpecialisms: string[] | null;
    sectorSpecialisms: string[] | null;
    workEnvironment: string;
    currency: Currency | null;

    // The Role
    whatYouBring: ContentElement[];
    tasks: ContentElement[];
    benefits: ContentElement[] | null;
    trainingDevelopment: ContentElement[] | null;

    // The Role / Other
    interviewProcess: ContentElement[] | null;
    visaSponsorchip: ContentElement[] | null;
    securityClearance: ContentElement[] | null;

    // The recruiter
    recruiterFirmOverview: ContentElement[] | null;
    recruiterOverview: ContentElement[] | null;
    recruiterSocialMedia: SocialMediaEmbeddable | null;
    recruiterFirmSocialMedia: SocialMediaEmbeddable | null;

    // The company
    Overview: ContentElement[];
    cultureValues: ContentElement[] | null;
    environmentSustainability: ContentElement[] | null;
    inclusionDiversity: ContentElement[] | null;

    // Articles
    externalLinks: ExternalLink[] | null;


    /**
     * Parses an input string to structure the content into paragraphs and lists.
     * 
     * @param input The string to be parsed.
     * @returns An array of `ContentElement` objects representing the structured content.
     */

    private parseContent(input: string): ContentElement[] {
        if (typeof input !== 'string') {
            // console.error('Invalid input.');
            return [];
        }
        // Split the input string into lines based on newline characters.
        // This supports different newline conventions (CR, LF, CRLF).
        const lines = input?.split(/\r\n|\r|\n/);

        // Initialize an empty array to hold the content elements (lists and paragraphs).
        const contentElements: ContentElement[] = [];

        // Temporary storage for accumulating list items until we're ready to add them as a single list ContentElement.
        let currentListItems: string[] = [];

        // Iterate over each line of the input string.
        lines.forEach(line => {
            // Trim whitespace from the current line for cleaner processing.
            const trimmedLine = line.trim();

            // Check if the trimmed line starts with a dash, indicating a list item.
            if (trimmedLine.startsWith('-')) {
                // Add the list item to the temporary storage, removing the leading dash and any extra whitespace.
                currentListItems.push(trimmedLine.slice(1).trim());
            } else {
                // If we encounter a non-list line and there are accumulated list items,
                // add them as a list ContentElement and reset the temporary storage.
                if (currentListItems.length > 0) {
                    contentElements.push({ type: 'list', data: currentListItems });
                    currentListItems = [];
                }
                // If the current line contains text (is not just whitespace), add it as a paragraph ContentElement.
                if (trimmedLine) {
                    contentElements.push({ type: 'paragraph', data: trimmedLine });
                }
            }
        });

        // After processing all lines, if there are any remaining list items, add them as a final list ContentElement.
        if (currentListItems.length > 0) {
            contentElements.push({ type: 'list', data: currentListItems });
        }

        // Return the structured array of ContentElements, representing the organized content as lists and paragraphs.
        return contentElements;
    }

    constructor(dto: JobPostDto) {
        this.id = dto.id;
        this.companyName = dto.companyName;
        this.recruiterFirmName = dto.recruiterFirmName;
        this.title = dto.title;
        this.logo = dto.logo;
        this.url = dto.url;
        this.contractType = dto.contractType;
        this.experienceLevel = dto.experienceLevel;
        this.roleFocus = dto.roleFocus;
        this.remote = dto.remote;
        this.location = dto.location;
        this.dateRange = dto.dateRange;
        this.minSalary = dto.minSalary;
        this.maxSalary = dto.maxSalary;
        this.OneLineOverview = dto.OneLineOverview;
        this.workEnvironment = dto.workEnvironment;
        this.nbOfEmployees = dto.nbOfEmployees;
        this.serviceSpecialisms = dto.serviceSpecialisms;
        this.sectorSpecialisms = dto.sectorSpecialisms;
        this.whatYouBring = this.parseContent(dto.whatYouBring);
        this.tasks = this.parseContent(dto.tasks);
        this.benefits = dto.benefits ? this.parseContent(dto.benefits) : null;
        this.trainingDevelopment = dto.trainingDevelopment ? this.parseContent(dto.trainingDevelopment) : null;
        this.interviewProcess = dto.interviewProcess ? this.parseContent(dto.interviewProcess) : null;
        this.visaSponsorchip = dto.visaSponsorchip ? this.parseContent(dto.visaSponsorchip) : null;
        this.securityClearance = dto.securityClearance ? this.parseContent(dto.securityClearance) : null;
        this.Overview = this.parseContent(dto.Overview);
        this.cultureValues = dto.cultureValues ? this.parseContent(dto.cultureValues) : null;
        this.environmentSustainability = dto.environmentSustainability ? this.parseContent(dto.environmentSustainability) : null;
        this.inclusionDiversity = dto.inclusionDiversity ? this.parseContent(dto.inclusionDiversity) : null;
        this.externalLinks = dto.externalLinks;
        this.currency = dto.currency;

        this.recruiterFirmOverview = dto.recruiterFirmOverview ? this.parseContent(dto.recruiterFirmOverview) : null;
        this.recruiterOverview = dto.recruiterOverview ? this.parseContent(dto.recruiterOverview) : null;
        this.recruiterSocialMedia = dto.recruiterSocialMedia ? dto.recruiterSocialMedia : null;
        this.recruiterFirmSocialMedia = dto.recruiterFirmSocialMedia ? dto.recruiterFirmSocialMedia : null;
    }
}
