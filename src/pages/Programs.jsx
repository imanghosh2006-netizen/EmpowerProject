import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Programs = () => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      const { data, error } = await supabase.from('lectures').select('*');
      if (error) console.error(error);
      else setLectures(data);
    };
    fetchLectures();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Available Modules</h2>
      <div className="grid gap-4">
        {lectures.map((item) => (
          <div key={item.id} className="border p-4 rounded bg-white shadow">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
            <a href={item.video_url} target="_blank" className="text-blue-600 font-bold">Watch Video →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;