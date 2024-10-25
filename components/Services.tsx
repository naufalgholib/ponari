import React, { FC } from 'react'
import IconHiglight from './IconHiglight'
import Each from '@/utils/Each'

const Services: FC = ({ }) => {
  return (
    <section className='max-w-[1312px] mx-auto h-[294px] flex flex-col justify-center items-center gap-4'>
      <h2 className='text-center font-bold text-[18px] mb-4'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>

      <div className='flex gap-12'>
        <Each of={[1, 2, 3, 4, 5, 6]} render={(item) => {
          if (item % 2 === 0) {
            return (
              <IconHiglight
                text='Relume'
                icon={<svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M32.302 9.684L32.0509 9.23556C31.7271 8.69324 31.2702 8.24252 30.7236 7.92612L18.6876 0.984313C18.1425 0.668175 17.5239 0.501138 16.8938 0.5H16.3736C15.7435 0.501138 15.1249 0.668175 14.5799 0.984313L2.54389 7.94406C2.00034 8.25836 1.54882 8.70995 1.23446 9.2535L0.983336 9.70194C0.667181 10.2469 0.500143 10.8656 0.499023 11.4956V25.3972C0.500143 26.0273 0.667181 26.6459 0.983336 27.1909L1.23446 27.6393C1.55695 28.1766 2.00664 28.6263 2.54389 28.9488L14.5978 35.8905C15.1401 36.2132 15.7606 36.3808 16.3916 36.3748H16.8938C17.5239 36.3737 18.1425 36.2066 18.6876 35.8905L30.7236 28.9309C31.2725 28.6236 31.7258 28.1704 32.033 27.6214L32.302 27.173C32.6144 26.6264 32.7812 26.0087 32.7863 25.3792V11.4777C32.7853 10.8477 32.6183 10.229 32.302 9.684ZM16.3736 4.08741H16.8938L27.4052 10.1503L16.6427 16.3566L5.88027 10.1503L16.3736 4.08741ZM18.4364 31.8906L28.9298 25.8277L29.1988 25.3793V13.2536L18.4364 19.4779V31.8906Z" fill="black" />
                </svg>}
              />
            )
          }
          return (
            <IconHiglight
              key={item}
              text='Webflow'
              icon={<svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M36.5712 0.75L25.0617 23.25H14.251L19.0677 13.925H18.8516C14.8779 19.0835 8.94885 22.4794 0.500977 23.25V14.0541C0.500977 14.0541 5.90529 13.7349 9.08233 10.3947H0.500977V0.750177H10.1455V8.68265L10.362 8.68176L14.3031 0.750177H21.597V8.63235L21.8134 8.632L25.9024 0.75H36.5712Z" fill="black" />
              </svg>
              }
            />
          )
        }} />
      </div>
    </section>
  )
}

export default Services;