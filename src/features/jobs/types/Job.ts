export type JobCard = {
  id: string;
  title: string;
  company: string;
  location: string;
  workType: "Remote" | "Onsite" | "Hybrid";
  experience: "Fresher" | "Experienced";
  shift: "Day shift" | "Night shift";
  responseTime: string;
  easyApply: boolean;
  bookmarked: boolean;
};
