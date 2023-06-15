/* POST REQUEST

POST  https://www.linkedin.com/oauth/v2/accessToken
 
Content-Type: application/x-www-form-urlencoded
grant_type = authorization_code
code = {authorization_code_from_step2_response}
client_id = 86wbcx15zgrlss
client_secret = 6UdsfqsavfiXvVlk
redirect_uri = http://localhost:3000/
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv'
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import { FormValues } from './FormComponent';



dotenv.config();

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

interface ProfileData {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
}

type LinkedInLoginButtonProps = {
  text: string;
  onLinkedInClick: (dataFromLinkedIn: FormValues) => void; 
  linkedInUsername: string;
  disabled: boolean;
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text, onLinkedInClick, linkedInUsername, disabled }) => {
  const apiKey = "648a8286f043444721786490";
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
    return 0;
  };

  useEffect(() => {
    getLinkedInData();
  }, [jsonData?.access_token]);

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
        onClick = {handleLogin}>
        {text}
      </Button>
    </div>
  );
};

export default LinkedInLoginButton;
