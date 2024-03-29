<script>
  import Button from '$lib/components/Button.svelte';
  import FormGroup from '$lib/components/FormGroup.svelte';
  import Icon from '$lib/components/Icon.svelte';

  import RadioGroup from "$lib/components/RadioGroup.svelte";
  import CheckboxGroup from "$lib/components/CheckboxGroup.svelte";
  import Input from '$lib/components/Input.svelte';
  import ComponentExample from "./ComponentExample.svelte";
  import TextField from "$lib/components/TextField.svelte";
  import TextArea from "$lib/components/TextArea.svelte";
  import P from "$lib/components/P.svelte";
  import A from "$lib/components/A.svelte";
  import Hr from "$lib/components/Hr.svelte";
  import SwatchList from "./SwatchList.svelte";
  import H1 from "$lib/components/H1.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  import Tab from "$lib/components/Tab.svelte";
  import TabList from "$lib/components/TabList.svelte";
  import UL from "$lib/components/UL.svelte";
  import LI from "$lib/components/LI.svelte";

  import '$lib/global.css'

</script>

<H1>Figma DS Obra</H1>

<P>A library with ever-green basics that we need for Obra plugin development. If a component is specific for a project, define it in the plugin itself.</P>

<P>Todo:</P>

<UL>
  <LI>implement tabs</LI>
  <LI>fix bugs with focus styles</LI>
  <LI>use more colour variables from figma</LI>
</UL>



<H2>UI examples - Tabs</H2>

<ComponentExample name="Tabs">

  <!-- What is good markup for a tab list?-->
  <TabList>
    <Tab active>Basics</Tab>
    <Tab>Advanced</Tab>
    <Tab>Set API key</Tab>
  </TabList>

</ComponentExample>


<H2>Color examples</H2>

<P>Colors by raw token.</P>

<SwatchList />


<h2>UI examples - Text</h2>

<ComponentExample name="Horizontal divider">
  <Hr />
</ComponentExample>

<ComponentExample name="Heading 1">
  <H1>Heading</H1>
</ComponentExample>

<ComponentExample name="Heading 2">
  <H2>Heading</H2>
</ComponentExample>

<ComponentExample name="Heading 3">
  <H3>Heading</H3>
</ComponentExample>

<ComponentExample name="Paragraph">
  <P>Choose an image on the canvas, and click the button below:</P>
</ComponentExample>

<ComponentExample name="Paragraph muted">
  <P muted>When you use this plugin, your images will be sent to Microsoft Azure for processing.</P>
</ComponentExample>

<ComponentExample name="Link">
  <A href="/">This is a normal link</A>
</ComponentExample>

<ComponentExample name="External link">
  <A href="/" target="_blank">Read our privacy policy</A>
</ComponentExample>

<h2>UI examples - Buttons and icons</h2>

<ComponentExample name="Button">
  <Button>Secondary button (default)</Button>
</ComponentExample>

<ComponentExample name="Button primary">
  <Button skin="primary">Primary button</Button>
</ComponentExample>

<ComponentExample name="Button disabled">
  <Button disabled>Disabled button</Button>
  <Button skin="primary" disabled>Disabled button</Button>
</ComponentExample>

<!--<ComponentExample name="Loading">-->
<!--  <Loading />-->
<!--</ComponentExample>-->

<ComponentExample name="Icon">
  <Icon name="arrow-right" />
  <Icon name="external-link" />
</ComponentExample>


<H2>UI examples - Forms</H2>

<ComponentExample name="Textarea">
  <TextArea value="Hey!" />
</ComponentExample>

<ComponentExample name="Input (text) - bare">
  <Input type="text" value="Hey" />
</ComponentExample>

<ComponentExample name="Input (password) - bare">
  <Input type="password" id="myPassword" value="Hey2" />
</ComponentExample>

<ComponentExample name="TextField (combines Label + Input)">
  <TextField label="Label" id="apiKey" value="Hey combined" />
</ComponentExample>

<ComponentExample name="TextField with placeholder">
  <TextField label="Field with placeholder" id="fieldPlaceholder" placeholder="This is a placeholder" />
</ComponentExample>

<ComponentExample name="TextField (combines Label + Input + Form Message)">
  <FormGroup>
    <TextField label="Enter your API key" id="apiKey2" value="Hey combined2" formMessage='Please enter an API key. Please register your key at <a href="https://accounts.obra.studio/" target="_blank">accounts.obra.studio</a>' />
  </FormGroup>
</ComponentExample>

<ComponentExample name="Multiple form groups">
  <FormGroup>
    <TextField label="Label 1" id="field1" value="Hey combined" />
  </FormGroup>
  <FormGroup>
    <TextField label="Field with placeholder" id="fieldPlaceholder2" placeholder="This is a placeholder" />
  </FormGroup>
  <FormGroup>
    <TextField label="Password" id="fieldPassword"  type="password"  />
  </FormGroup>
  <FormGroup>
    <TextField label="Email" id="fieldEmail" type="email"  />
  </FormGroup>
  <FormGroup>
    <TextField label="Number" id="fieldNo" type="number"  />
  </FormGroup>
  <FormGroup>
    <TextField type="textarea" label="My story" rows={10} id="fieldStory" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  />
  </FormGroup>
</ComponentExample>

<ComponentExample name="Radio group">
  <FormGroup>
    <RadioGroup
        legend="Multiplier"
        items={[
          {
              id: "id1",
              name: "multiplier",
              label: "1x",
              value: 1,
              disabled: true
          },
          {
              id: "id2",
              name: "multiplier",
              label: "2x",
              value: 2
          },
          {
              id: "id3",
              label: "3x",
              name: "multiplier",
              value: 3
          }
      ]} />
  </FormGroup>
</ComponentExample>

<ComponentExample name="Checkboxes">

  <CheckboxGroup
      legend="Remove specific characters?"
      items={[
        {
            "label": "O",
            "value": "removeO"
        },
        {
            "label": ">",
            "value": "removeGreaterThan"
        },
        {
            "label": "<",
            "value": "removeLessThan"
        },
        {
            "label": "X",
            "value": "removeX"
        }

    ]} />
</ComponentExample>

<ComponentExample name="Disabled checkbox">

  <CheckboxGroup
      items={[
        {
            "label": "Ignore one character output",
            "value": "value1",
            "disabled": true
        }
    ]} />
</ComponentExample>
