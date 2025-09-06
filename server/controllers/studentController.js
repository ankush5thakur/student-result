const Student = require('../model/studentModel.js');

const getStudentByRollNumber = async (req, res) => {
  try {
    const rollNumber = req.headers.roll_number;

    if (!rollNumber) {
      return res.status(400).json({ error: 'Roll number is required' });
    }

    const student = await Student.findOne({ roll_number: rollNumber });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search || '';
    const branch = req.query.branch || '';
    const batch = req.query.batch || '';
    const sortBy = req.query.sortBy || 'cgpi';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    let query = {};

    if (search) {
      const searchParts = search
        .toUpperCase()
        .trim()
        .split(' ')
        .filter((part) => part.length > 0);

      if (searchParts.length > 0) {
        const namePatterns = searchParts.map((part) => {
          const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          return `\\b${escapedPart}`;
        });

        const nameRegex = new RegExp(namePatterns.join('|'), 'i');

        query.$or = [
          { name: nameRegex },
          { roll_number: { $regex: search, $options: 'i' } },
        ];
      }
    }

    if (branch) {
      query.branch = branch;
    }

    if (batch) {
      query.batch = batch;
    }

    const sort = {};
    if (sortBy === 'cgpi' || sortBy === 'cgpi-desc') {
      sort.cgpi = -1;
    } else if (sortBy === 'cgpi-asc') {
      sort.cgpi = 1;
    } else {
      sort[sortBy] = sortOrder;
    }

    const students = await Student.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select('-semester_results');

    const total = await Student.countDocuments(query);

    // Calculate additional ranking data for each student
    const studentsWithRanks = students.map((student, index) => ({
      ...student.toObject(),
      serialNumber: skip + index + 1,
    }));

    res.json({
      students: studentsWithRanks,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalResults: total,
        resultsPerPage: limit,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get unique branches and batches for filter options
const getFilterOptions = async (req, res) => {
  try {
    const branches = await Student.distinct('branch');
    const batches = await Student.distinct('batch');

    res.json({
      branches: branches.sort(),
      batches: batches.sort(),
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getStudentByRollNumber,
  getStudents,
  getFilterOptions,
};
