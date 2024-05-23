import React, { useState } from 'react';
import axios from 'axios';

interface Student {
  id: number;
  teacher: string;
  name: string;
  type: 'memorization' | 'alphabet';
}

interface FormData {
  chapterMemorized?: string;
  versesMemorized?: string;
  chapterRevised?: string;
  versesRevised?: string;
  chapterReinforced?: string;
  versesReinforced?: string;
  memorizationEvaluation?: number;
  alphabetEvaluation?: number;
  behaviorEvaluation?: number;
}

interface DailyFormProps {
  student: Student;
}

const DailyForm: React.FC<DailyFormProps> = ({ student }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://docs.google.com/forms/d/e/1FAIpQLSd-cRICbpV4oxy7LGFj_hgBVjv_JrroD7XMsgF47epEM1ykLg/viewform', {
        studentId: student.id,
        ...formData,
      });
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Failed to submit data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Daily Form for {student.name}</h2>
      {student.type === 'memorization' ? (
        <>
          <label>
            Chapter Memorized:
            <input type="text" name="chapterMemorized" onChange={handleChange} />
          </label>
          <br />
          <label>
            Verses Memorized:
            <input type="text" name="versesMemorized" onChange={handleChange} />
          </label>
          <br />
          <label>
            Chapter Revised:
            <input type="text" name="chapterRevised" onChange={handleChange} />
          </label>
          <br />
          <label>
            Verses Revised:
            <input type="text" name="versesRevised" onChange={handleChange} />
          </label>
          <br />
          <label>
            Chapter Reinforced:
            <input type="text" name="chapterReinforced" onChange={handleChange} />
          </label>
          <br />
          <label>
            Verses Reinforced:
            <input type="text" name="versesReinforced" onChange={handleChange} />
          </label>
          <br />
          <label>
            Memorization Evaluation:
            <input type="number" name="memorizationEvaluation" onChange={handleChange} max="10" min="1" />
          </label>
        </>
      ) : (
        <>
          <label>
            Alphabet Evaluation:
            <input type="number" name="alphabetEvaluation" onChange={handleChange} max="10" min="1" />
          </label>
          <br />
          <label>
            Behavior Evaluation:
            <input type="number" name="behaviorEvaluation" onChange={handleChange} max="10" min="1" />
          </label>
        </>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DailyForm;
