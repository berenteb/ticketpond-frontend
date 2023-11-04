import { ValidationResponseDto } from '@/api';
import { Button } from '@/components/button/Button';
import { TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb';

interface ValidationResultProps {
  responseData: ValidationResponseDto;
  onContinue: () => void;
}

export function ValidationResult({ responseData, onContinue }: ValidationResultProps) {
  return (
    <div className='flex flex-col items-center gap-5'>
      {responseData.isValid ? (
        <TbCircleCheckFilled size={50} className='text-green-500' />
      ) : (
        <TbCircleXFilled size={50} className='text-red-500' />
      )}
      <div className='items-center flex flex-col gap-5'>
        <h1>{ResponseMessages[responseData.message] ?? 'Ismeretlen státusz'}</h1>
        <p>{responseData.orderItem?.serialNumber}</p>
        <p>{responseData.orderItem?.ticket.name}</p>
        <p>
          {responseData.customer?.lastName} {responseData.customer?.firstName}
        </p>
      </div>
      <Button onClick={onContinue}>Új beolvasás</Button>
    </div>
  );
}

const ResponseMessages: Record<string, string> = {
  VALID: 'Érvényes',
  INVALID: 'Érvénytelen',
  NOT_FOUND: 'Nem található ilyen jegy',
  TOO_EARLY: 'Érvényességi idő még nem kezdődött el',
  TOO_LATE: 'Érvényességi idő lejárt',
  UNPAID: 'Nem kifizetett / befejezetlen rendelés',
};
