import Input from '@/components/ui/Input';
import React from 'react';

type Props = {};

export default function FormDetailIntern({}: Props) {
    return (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Intern ID
                </label>
                <Input title="" value="#12345678" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Date Interview
                </label>
                <Input title="" value="2 Jan 2023" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Time Interview
                </label>
                <Input title="" value="10:15:00 AM" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Full Name
                </label>
                <Input title="" value="Phạm Văn Vĩ" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Date Of Births
                </label>
                <Input title="" value="25/08/2000" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Phone Number
                </label>
                <Input title="" value="0901614258" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Position
                </label>
                <Input title="" value="Front End" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    School
                </label>
                <Input title="" value="Tôn Đức Thắng" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Address
                </label>
                <Input title="" value="Dương Bá Trạc, Quận 8" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Email
                </label>
                <Input title="" value="pvanvi@gmail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Link Cv
                </label>
                <Input title="" value="Link" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    Interviewer
                </label>
                <Input title="" value="A Quân" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base font-semibold" htmlFor="">
                    English Proficiency
                </label>
                <Input title="" value="IELTS 9.0 " />
            </div>
        </div>
    );
}
