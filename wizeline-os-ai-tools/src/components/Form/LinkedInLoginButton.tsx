import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});

export interface FormProfileData {
  aboutDescription:   string  | undefined,
  fullName:           string,
  title:              string  | undefined,
  country:            string  | undefined,
  state:              string  | undefined,
  city:               string  | undefined,
  phoneNumber:        string  | undefined,
  avatarURL:          string  | undefined,
  schoolName:         string  | undefined,
  degree:             string  | undefined,
  specialization1:    string  | undefined, 
  specialization2:    string  | undefined,
  pastWTitle:         string  | undefined,
  pastWStart:         string  | undefined,
  pastWEnd:           string  | undefined,
  pastWDescription:   string  | undefined,
}

interface DescriptionLinkedIn {
  description1:       string,
  description1_link:  string,
  description2:       string,
  description2_link:  string,
}

interface EducationLinkedIn {
  college_degree:       string,
  college_degree_field: string,
  college_duration:     string,
  college_name:         string,
  college_url:          string,

}

interface CertificationLinkedIn {
  certificacion:  string,
  company_image:  string,
  company_name:   string,
  company_url:    string,
  credential_id:  string,
  issue_date:     string,
}

interface ExperienceLinkedIn {
  company_name: string,
  company_url:  string,
  duration:     string,
  ends_at:      string,
  location:     string,
  position:     string,
  starts_at:    string,
  summary:      string,
}

interface LinkedInData {
  about: string,
  activities: string[],
  articles: string[],
  awards: string[],
  background_cover_image_url: string,
  card_subtitle: string,
  card_title: string,
  certification: CertificationLinkedIn[],
  connections: string,
  courses: string[],
  description: DescriptionLinkedIn,
  education: EducationLinkedIn[],
  experience: ExperienceLinkedIn[],
  first_name: string,
  followers: string,
  fullName: string,
  headline: string,
  languages: string[],
  last_name: string,
  location: string,
  organizations: string[],
  people_also_viewed: string[],
  profile_photo: string,
  projects: string[],
  public_identifier: string,
  publications: string[],
  recommendations: string[],
  score: string[],
  similar_profiles: string[],
  volunteering: string[]
}

type LinkedInLoginButtonProps = {
  text: string;
  onLinkedInClick: (dataFromLinkedIn: FormProfileData) => void; 
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text, onLinkedInClick }) => {
  const apiKey ="64777c8c6514e8526cae2657";
  const classes = useStyles();

  let linkedInProfile: LinkedInData;

  const fetchProfileData = async () => {
  try {
    const resp = await axios.get(`https://api.scrapingdog.com/linkedin?api_key=${apiKey}&type=profile&linkId=silvanatorresferrera-11a162208`)
    const profileInfo = resp.data[0]
    linkedInProfile = profileInfo;
    console.log("LinkedIn fetch: ", linkedInProfile);
    const locationLinkedIn = linkedInProfile.location.split(", ");
    // LinkedInData to FormProfileData
    const profileData: FormProfileData = {
      aboutDescription  : linkedInProfile.about,
      fullName          : linkedInProfile.fullName,
      title             : linkedInProfile.headline,
      country           : locationLinkedIn[2],
      state             : locationLinkedIn[1],
      city              : locationLinkedIn[0],
      phoneNumber       : "",
      avatarURL         : linkedInProfile.profile_photo,
      schoolName        : linkedInProfile.education[0]?.college_name,
      degree            : linkedInProfile.education[0]?.college_degree.concat(" in ", linkedInProfile.education[0]?.college_degree_field),
      specialization1   : linkedInProfile.certification[0]?.certificacion,
      specialization2   : linkedInProfile.certification[1]?.certificacion,
      pastWTitle        : linkedInProfile.experience[0]?.position,
      pastWStart        : linkedInProfile.experience[0]?.starts_at,
      pastWEnd          : linkedInProfile.experience[0]?.ends_at,
      pastWDescription  : linkedInProfile.experience[0]?.summary,
    }

    console.log("Ordered data: ", profileData);

    onLinkedInClick(profileData);
    
  } catch (error) {
    console.log('Error al obtener los datos del perfil:', error);
  }
};


  return (
    <div>
      <Button 
        variant = "contained" 
        className={classes.root}
        style={{ textTransform: 'none', borderRadius: '50px' }}
        endIcon=
          {<Avatar style={{ background: 'transparent' }}>
            <LinkedInIcon style={{ color: 'white', fontSize: 25 }} />
          </Avatar>} 
        onClick = {fetchProfileData}>
        {text}
      </Button>
    </div>
  );
};

export default LinkedInLoginButton;