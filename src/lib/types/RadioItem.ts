export interface RadioItem {
    id: string;
    /* Name is used to group radio buttons. */
    name: string;
    value: string;
    /* The label is used for the text of the radio button. */
    label?: string;
    checked?: boolean;
    disabled?: boolean;
}
