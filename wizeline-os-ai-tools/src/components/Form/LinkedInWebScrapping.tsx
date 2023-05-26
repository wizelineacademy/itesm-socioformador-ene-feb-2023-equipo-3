import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio'
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import { head } from 'cypress/types/lodash';

const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});

interface LinkedInData {
  about: string,
  activities: string[],
  articles: string[],
  awards: string[],
  background_cover_image_url: string,
  card_subtitle: string,
  card_title: string,
  certification: string[],
  connections: string,
  courses: string[],
  description: string,
  education: string[],
  experience: string[],
  first_name: string,
  followers: string,
  fullName: string,
  headline: string,
  languages: string[],
  last_name: string,
  location: string,
  organizations: string[],
  people_also_viewed: string[],
  projects: string[],
  public_identifier: string,
  publications: string[],
  recommendations: string[],
  score: string[],
  similar_profiles: string[],
  volunteering: string[]

  scope: string
}

type LinkedInLoginButtonProps = {
  text: string;
  retrievedData: LinkedInData;
};

const getDataFromLinkedIn: React.FC<LinkedInLoginButtonProps> = ({ text, retrievedData }) => {
  const apiKey ="646fbe4ff645827fb0da75b3";
  const classes = useStyles();
  let linkedInProfile: LinkedInData;

  const fetchProfileData = async () => {
  try {
    var resp = await axios.get(`https://api.scrapingdog.com/linkedin?api_key=${apiKey}&type=profile&linkId=dairadriana`)
    const profileInfo = resp.data[0]
    linkedInProfile = profileInfo;
    console.log(linkedInProfile);
    return linkedInProfile;
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

export default getDataFromLinkedIn;
