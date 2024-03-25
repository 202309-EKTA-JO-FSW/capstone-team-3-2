// pages/customer/index.js
"use client"
import { useRouter } from 'next/navigation';

export default function CustomerHomePage() {
  const router = useRouter();
//   const { Id } = router.query;

  // You can now use the Id in your component
  return (
    <div>
      <h1>Welcome Customer!</h1>
      {/* <p>Your user Id is: {Id}</p> */}
    </div>
  );
}
