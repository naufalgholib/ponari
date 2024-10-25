import React, { FC, useState } from 'react'
import DiagnoseForm from "./DiagnoseForm";
import PrescriptionForm from "./PrescriptionForm";
import Each from '@/utils/Each';
import UpcomingAppointmentItem from './UpcomingAppointmentItem';

const UpcomingAppointments: FC = ({ }) => {
  const [selectedForm, setSelectedForm] = useState<number>(0);

  return (
    <>
      {selectedForm === 1 && <DiagnoseForm onSelectedForm={setSelectedForm} />}
      {selectedForm === 2 && <PrescriptionForm onSelectedForm={setSelectedForm} />}
      <div className="py-6 px-8 space-y-8 h-full overflow-y-scroll overflow-x-hidden">
        <Each of={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} render={(item) =>
          <UpcomingAppointmentItem key={item} onSelectedForm={setSelectedForm} />
        } />
      </div>
    </>
  )
}

export default UpcomingAppointments;