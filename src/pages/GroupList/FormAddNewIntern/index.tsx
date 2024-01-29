import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

type Props = {};

export default function FormAddNewIntern({}: Props) {
    return (
        <form>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Intern ID
                    </label>
                    <Input title="  Intern ID" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Full Name
                    </label>
                    <Input title="Full Name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Phone Number
                    </label>
                    <Input title="  Phone Number" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Position
                    </label>
                    <Input title="Position" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        School
                    </label>
                    <Input title="  School" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Address
                    </label>
                    <Input title="Address" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Email
                    </label>
                    <Input title="Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Link Cv
                    </label>
                    <Input title="Link Cv" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Mentor
                    </label>
                    <Input title="Mentor" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Project
                    </label>
                    <Input title=" Project" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Group Zalo
                    </label>
                    <Input title=" Group Zalo" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="">
                        Role
                    </label>
                    <Input title="Role" />
                </div>
            </div>
            <Button variant={'default'} size={'lg'} className="float-right mt-3 mr-5" leftIcon={<FaPlusCircle />}>
                Add New Intern
            </Button>
        </form>
    );
}
