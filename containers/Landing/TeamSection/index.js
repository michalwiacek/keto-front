import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Heading from '../../../components/elements/Heading';
import Image from '../../../components/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import { TEAM_MEMBER } from '../../../common/src/data';
import Container from '../../../components/Container';
import TeamSectionWrapper, { SocialLinks } from './teamSection.style';

const TeamSection = ({ row, col, sectionHeader, sectionTitle, memberName, designation, contentStyle, photo }) => {
    return (
        <TeamSectionWrapper id="teamSection">
            <Container>
                <Box {...sectionHeader}>
                    {/* <Text content="TEAM MEMBER" {...sectionSubTitle} /> */}
                    <Heading content="Poznaj naszych majstrów" {...sectionTitle} />
                </Box>
                <Box className="row" {...row}>
                    {TEAM_MEMBER.map(member => (
                        <Box className="col" {...col} key={`team_key-${member.id}`}>
                            <FeatureBlock
                                id={`member-${member.id}`}
                                className="team__member"
                                icon={
                                    <Image
                                        src={member.thumbnail_url}
                                        alt={`Team member photo ${member.id}`}
                                        className="member__photo"
                                        {...photo}
                                    />
                                }
                                contentStyle={contentStyle}
                                title={<Heading content={member.name} {...memberName} />}
                                description={
                                    <>
                                        <Text content={member.designation} {...designation} />
                                        <SocialLinks>
                                            {member.social_links.map(social => (
                                                <a
                                                    href={social.url}
                                                    key={`profile_id-${social.id}`}
                                                    className={social.icon}
                                                    aria-label={social.icon}
                                                >
                                                    <Image />
                                                </a>
                                            ))}
                                        </SocialLinks>
                                    </>
                                }
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </TeamSectionWrapper>
    );
};

// TeamSection style props
TeamSection.propTypes = {
    sectionHeader: PropTypes.shape,
    row: PropTypes.shape,
    col: PropTypes.shape,
    sectionTitle: PropTypes.shape,
    sectionSubTitle: PropTypes.shape,
    memberName: PropTypes.shape,
    designation: PropTypes.shape,
    contentStyle: PropTypes.shape,
    photo: PropTypes.shape,
};

// TeamSection default style
TeamSection.defaultProps = {
    // section header default style
    sectionHeader: {
        mb: ['40px', '56px'],
    },
    // sub section default style
    sectionSubTitle: {
        as: 'span',
        display: 'block',
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.15em',
        fontWeight: '700',
        color: '#10ac84',
        mb: '10px',
    },
    // section title default style
    sectionTitle: {
        textAlign: 'center',
        fontSize: ['20px', '24px'],
        fontWeight: '400',
        color: '#0f2137',
        letterSpacing: '-0.025em',
        mb: '0',
    },
    // Team member row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        ml: '-15px',
        mr: '-15px',
    },
    // Team member col default style
    col: {
        width: [1, 1 / 2, 1 / 3, 1 / 3],
        pl: '15px',
        pr: '15px',
        mb: '30px',
    },
    // Team member content default style
    contentStyle: {
        textAlign: 'center',
        mt: '25px',
    },
    // Team member memberName default style
    memberName: {
        fontSize: ['18px', '18px', '16px', '20px'],
        fontWeight: '400',
        color: '#0f2137',
        lineHeight: '1.5',
        mb: '8px',
        letterSpacing: '-0.020em',
    },
    photo: {
        width: '150px',
        m: 'auto',
    },
    // Team member description default style
    designation: {
        fontSize: ['15px', '16px', '14px', '17px'],
        lineHeight: '1',
        color: 'rgba(15, 33, 55, 0.6)',
        mb: 0,
    },
};

export default TeamSection;
