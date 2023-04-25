import InputText from '../components/InputText.vue';

export default {
  title: 'InputText',
  component: InputText,
  argTypes: {
    value: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputText },
  template: '<InputText v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: 'Label',
};
