import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import { FormValues } from './FormComponent';

const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});

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
  onLinkedInClick: (dataFromLinkedIn: FormValues) => void; 
  linkedInUsername: string;
  disabled: boolean;
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text, onLinkedInClick, linkedInUsername, disabled }) => {
  const apiKey ="648762b57b07f1429ec04f09";
  const classes = useStyles();
  let linkedInProfile: LinkedInData;

  const fetchProfileData = async () => {
    if (disabled){
      alert('Please enter a LinkedIn username');
      return;
    }
    try {
      const resp = await axios.get(`https://api.scrapingdog.com/linkedin?api_key=${apiKey}&type=profile&linkId=${linkedInUsername}`)
      const profileInfo = resp.data[0]
      linkedInProfile = profileInfo;
      console.log("LinkedIn fetch: ", linkedInProfile);
      const locationLinkedIn = linkedInProfile.location.split(", ");
      // LinkedInData to FormValues
      const profileData: FormValues = {
        aiAsistant        : "",
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
        pastWtitle        : linkedInProfile.experience[0]?.position.concat(" at ", linkedInProfile.experience[0]?.company_name),
        pastWStartDate        : "",
        pastWEndDate          : "",
        pastWDescription  : linkedInProfile.experience[0]?.summary,
        expertSkills      : [],
        advancedSkills    : [],
        intermediateSkills: [],
        basicSkills       : [],
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
        onClick = {fetchProfileData}
        disabled={disabled}
        >
        {text}
      </Button>
    </div>
  );
};

export default LinkedInLoginButton;