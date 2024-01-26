import React from 'react';
import Input from '../Input';
import { GoChevronDown } from 'react-icons/go';

type Props = {};

export default function FormSearchConfirm({}: Props) {
    return (
        <div className="grid w-full grid-cols-2 gap-3 lg:w-full lg:grid-cols-3">
            <Input icon={<GoChevronDown />} title="Enter intern's ID" />
            <Input icon={<GoChevronDown />} title="Enter intern's Full name" />
            <Input icon={<GoChevronDown />} title="Enter intern's D.O.B" />
            <Input icon={<GoChevronDown />} title="Enter intern's Phone number" />
            <Input icon={<GoChevronDown />} title="Enter intern's Address" />
            <Input icon={<GoChevronDown />} title="Enter intern's Email" />
            <Input icon={<GoChevronDown />} title="Enter intern's Major" />
            <Input icon={<GoChevronDown />} title="Enter intern's Position" />
            <Input icon={<GoChevronDown />} title="Enter intern's School" />
            <Input icon={<GoChevronDown />} title="Enter intern's Address" />
            <Input icon={<GoChevronDown />} title="Enter Time Interview " />
        </div>
    );
}
