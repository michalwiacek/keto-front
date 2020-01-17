import React from 'react';
import { useRouter, Router } from 'next/router';
import PostSection from "../../containers/Blog/PostSection";
import withApollo from '../../lib/apollo';
import ScrollProgressRead from '../../components/ScrollProgressRead';
import { Bookmark, CircleInformation, FormSubtract, FormAdd, User } from 'grommet-icons';
import {Accordion, AccordionPanel, Box, Grommet, Text, Heading, DataTable, CheckBox} from "grommet";
import MacroMeter from "../../components/MacroMeter";
const DATA = [
  { name:'Pietruszka', amount:'100'},
  { name:'Mleko', amount:'100'},
  { name:'Korniszon', amount:'100'},
  { name:'Mandarynka', amount:'100'},
];
const columns = [{property: "name", header: <Text>Składnik</Text>, primary: true},{property: "amount", header: <Text>Ilość</Text>}];

const RichPanel = ({ children, icon, label }) => {
  const [hovering, setHovering] = React.useState(false);

  const renderPanelTitle = () => (
    <Box direction="row" align="center" gap="small" pad={{ horizontal: 'small' }}>
      {icon}
      <Heading level={4} color={hovering ? 'dark-1' : 'dark-3'}>
        {label}
      </Heading>
    </Box>
  );

  return (
    <AccordionPanel
      label={renderPanelTitle()}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      {children}
    </AccordionPanel>
  );
};

const Post = () => {
  const router = useRouter();
  const [checked, setChecked] = React.useState([]);

  const controlledColumns = columns.map(col => ({ ...col }));
  delete controlledColumns[0].footer;
  delete controlledColumns[1].aggregate;

  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  const onCheckAll = event =>
    setChecked(event.target.checked ? DATA.map(datum => datum.name) : []);
  return (
    <>
      <ScrollProgressRead backgroundColor="#FFFFFF" barColor="#FFCC00" height="3px" target="article-body" />
      <Grommet>
        <Box
          height="medium"
          width="large"
          round="small"
          align="center"
          // justify="center"
          gap="large"
          direction="row-responsive"
          pad={{ horizontal: "large", vertical: "small" }}
          margin={{ horizontal: "medium", top: 'xlarge', bottom: 'xsmall'}}
        >
          <Box width="medium">
            <DataTable
              columns={[
                {
                  property: "checkbox",
                  render: datum => (
                    <CheckBox
                      key={datum.name}
                      checked={checked.indexOf(datum.name) !== -1}
                      onChange={e => onCheck(e, datum.name)}
                    />
                  ),
                  header: (
                    <CheckBox
                      checked={checked.length === DATA.length}
                      indeterminate={
                        checked.length > 0 && checked.length < DATA.length
                      }
                      onChange={onCheckAll}
                    />
                  ),
                  sortable: false
                },
                ...controlledColumns
              ].map(col => ({ ...col }))}
              data={DATA}
              sortable
              size="medium"
            />
          </Box>

          <MacroMeter/>
        </Box>
        <Box margin={{ top: 'xsmall'}}
             fill
             width="large"
             height="small"
             pad="xlarge"
             round="small"
         align="center"
         justify="center"
        >
          <Accordion>
            <RichPanel icon={<CircleInformation />} label="Kroki do wykoniania">
              <Box
                pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                gap="medium"
                overflow="auto"
                style={{ maxHeight: '400px' }}
              >
                <Text color="dark-3">
                  Below is the top message in
                  <strong>#announcements</strong>.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Box>
            </RichPanel>
            <RichPanel icon={<Bookmark color="accent-1" />} label="Przygotowanie">
              <Box
                pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                gap="medium"
                overflow="auto"
                style={{ maxHeight: '400px' }}
              >
                <Text color="dark-3">
                  Below is the top message in
                  <strong>#announcements</strong>.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Box>
            </RichPanel>
            <RichPanel icon={<User color="accent-2" />} label="Gotowanie">
              <Box
                pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                gap="medium"
                overflow="auto"
                style={{ maxHeight: '400px' }}
              >
                <Text color="dark-3">
                  Below is the top message in
                  <strong>#announcements</strong>.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Box>
            </RichPanel>
            <RichPanel icon={<User color="accent-2" />} label="Uwagi">
              <Box
                pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                gap="medium"
                overflow="auto"
                style={{ maxHeight: '400px' }}
              >
                <Text color="dark-3">
                  Below is the top message in
                  <strong>#announcements</strong>.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Box>
            </RichPanel>
          </Accordion>
        </Box>
      </Grommet>

      {/*<PostSection />*/}
    </>
  );
};

export default withApollo(Post);
