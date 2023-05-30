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

interface FormProfileData {
  aboutDescription: string,
  fullName: string,
  title: string,
  country: string,
  state: string,
  city: string,
  phoneNumber: number,
  avatarURL: string,
  schoolName: string,
  degree: string,
  specialization1: string,
  specialization2: string,
  pastWDescription: string,
}

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
}

type getDataFromLinkedInProps = {
  text: string;
  updateFormValues: (jsonData: FormProfileData) => void;
};

const getDataFromLinkedIn: React.FC<getDataFromLinkedInProps> = ({ text, updateFormValues }) => {
  const apiKey ="646fbe4ff645827fb0da75b3";
  const classes = useStyles();
  let linkedInProfile: LinkedInData;
  let profileData: FormProfileData;

  const fetchProfileData = async () => {
  try {
    var resp = await axios.get(`https://api.scrapingdog.com/linkedin?api_key=${apiKey}&type=profile&linkId=dairadriana`)
    const profileInfo = resp.data[0]
    linkedInProfile = profileInfo;
    console.log(linkedInProfile);

    // LinkedInData to FormProfileData
    profileData = {
      aboutDescription  : linkedInProfile.about,
      fullName          : linkedInProfile.fullName,
      title             : linkedInProfile.headline,
      country           : "",
      state             : "",
      city              : "",
      phoneNumber       : 0,
      avatarURL         : linkedInProfile.background_cover_image_url,
      schoolName        : "",
      degree            : "",
      specialization1   : "",
      specialization2   : "",
      pastWDescription  : "",

    }

    updateFormValues(profileData);
    return profileData;
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
        onClick = {async () => {
          const jsonData = await fetchProfileData();
          if (jsonData) {
            updateFormValues(jsonData);
          }
        }}>
      </Button>
    </div>
  );
};

export default getDataFromLinkedIn;
