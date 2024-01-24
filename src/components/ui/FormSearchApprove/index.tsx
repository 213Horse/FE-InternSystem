import Input from '../Input';
import { GoChevronDown } from 'react-icons/go';
import { CiCalendar } from 'react-icons/ci';

type Props = {};

export default function FormSearchApprove({}: Props) {
    return (
        <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
            <Input title="Enter intern's ID" />
            <Input title="Enter intern's Full name" />
            <Input title="Enter intern's D.O.B" type="date" />
            <Input title="Enter intern's Phone number" />
            <Input icon={<GoChevronDown />} title="Enter intern's School" />
            <Input title="Enter intern's Email" />
            <Input title="Enter intern's Major" />
            <Input icon={<GoChevronDown />} title="Enter intern's Position" />
            <Input title="Enter intern's Address" />
            <Input type="date" title="Enter intern's Date Submitted Form" />
        </div>
    );
}
