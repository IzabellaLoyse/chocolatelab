import Logo from '../../components/Logo';

export default {
  title: 'Logo',
  component: Logo,
};

function Template(args) {
  return <Logo {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  simple: false,
};

export const Simple = Template.bind({});
Logo.args = {
  simple: true,
};
