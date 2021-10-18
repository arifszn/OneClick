import { AiFillGithub } from 'react-icons/ai';
import { SiGooglekeep, SiGooglemeet } from 'react-icons/si';

const iconSize = '4rem';

export const actions = [
    {
        name: 'GitHub',
        color: '#181717',
        get icon() {
            return <AiFillGithub size={iconSize}/>;
        },
        description: 'Create new GitHub repository.',
        url: 'https://github.new'
    },
    {
        name: 'Google Meet',
        color: '#00897B',
        get icon() {
            return <SiGooglemeet size={iconSize} color={this.color} />;
        },
        description: 'Launch a real-time meeting from your browser using Google Meet.',
        url: 'https://meet.new'
    },
    {
        name: 'Google Keep',
        color: '#FFBB00',
        get icon() {
            return <SiGooglekeep size={iconSize} color={this.color} />;
        },
        description: 'Create a new note using Google Keep.',
        url: 'https://keep.new'
    },
]