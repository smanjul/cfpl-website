import Link from "next/link";

export default function CourseItem({ course }) {
  return (
    <li className="flex items-center justify-between">

      {/* LEFT: Clickable title */}
      <Link href={`/teaching/${course.slug}`}>
        <span className="text-gray-800 hover:underline cursor-pointer">
          {course.code} — {course.title}
        </span>
      </Link>

      {/* RIGHT: Badges */}
      <div className="flex gap-2 text-xs">

        <span className="px-2 py-1 bg-gray-100 rounded">
          {course.level}
        </span>

        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
          {course.semester}
        </span>

      </div>
    </li>
  );
}
