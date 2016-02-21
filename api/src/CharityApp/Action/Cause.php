<?php
namespace CharityApp\Action;

class Cause extends \CharityApp\Action
{
    public function get()
    {
        $results = [];
        $results[] = (object)[
            'id' => 1,
            'name' => 'Animals',
            'slug' => 'animals',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 2,
            'name' => 'Animal Rights, Welfare, and Services',
            'slug' => 'animal-welfare',
            'parent' => 1,
        ];
        $results[] = (object)[
            'id' => 3,
            'name' => 'Animal Rights, Welfare, and Services',
            'slug' => 'animal-welfare',
            'parent' => 1,
        ];
        $results[] = (object)[
            'id' => 4,
            'name' => 'Zoos and Aquariums',
            'slug' => 'zoo-aquarium',
            'parent' => 1,
        ];

        $results[] = (object)[
            'id' => 5,
            'name' => 'Arts, Culture, Humanities',
            'slug' => 'arts',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 6,
            'name' => 'Libraries, Historical Societies and Landmark Preservation',
            'slug' => 'societies',
            'parent' => 5,
        ];
        $results[] = (object)[
            'id' => 7,
            'name' => 'Museums',
            'slug' => 'museums',
            'parent' => 5,
        ];
        $results[] = (object)[
            'id' => 8,
            'name' => 'Performing Arts',
            'slug' => 'performing-arts',
            'parent' => 5,
        ];
        $results[] = (object)[
            'id' => 9,
            'name' => 'Public Broadcasting and Media',
            'slug' => 'media',
            'parent' => 5,
        ];

        $results[] = (object)[
            'id' => 10,
            'name' => 'Community Development',
            'slug' => 'communities',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 11,
            'name' => 'Fundraising Organizations',
            'slug' => 'fundraising',
            'parent' => 10,
        ];
        $results[] = (object)[
            'id' => 12,
            'name' => 'Community Foundations',
            'slug' => 'foundations',
            'parent' => 10,
        ];
        $results[] = (object)[
            'id' => 13,
            'name' => 'Housing and Neighborhood Development',
            'slug' => 'housing',
            'parent' => 10,
        ];

        $results[] = (object)[
            'id' => 14,
            'name' => 'Education',
            'slug' => 'education',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 15,
            'name' => 'Universities, Graduate Schools, and Technological Institutes',
            'slug' => 'universities',
            'parent' => 14,
        ];
        $results[] = (object)[
            'id' => 16,
            'name' => 'Private Elementary and Secondary Schools',
            'slug' => 'private-schools',
            'parent' => 14,
        ];
        $results[] = (object)[
            'id' => 17,
            'name' => 'Other Education Programs and Services',
            'slug' => 'services',
            'parent' => 14,
        ];
        $results[] = (object)[
            'id' => 18,
            'name' => 'Private Liberal Arts Colleges',
            'slug' => 'liberal-arts',
            'parent' => 14,
        ];

        $results[] = (object)[
            'id' => 19,
            'name' => 'Environment',
            'slug' => 'environment',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 20,
            'name' => 'Environmental Protection and Conservation',
            'slug' => 'protection',
            'parent' => 19,
        ];
        $results[] = (object)[
            'id' => 21,
            'name' => 'Botanical Gardens, Parks, and Nature Centers',
            'slug' => 'parks',
            'parent' => 19,
        ];

        $results[] = (object)[
            'id' => 22,
            'name' => 'Health',
            'slug' => 'health',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 23,
            'name' => 'Diseases, Disorders, and Disciplines',
            'slug' => 'diseases',
            'parent' => 22,
        ];
        $results[] = (object)[
            'id' => 24,
            'name' => 'Patient and Family Support',
            'slug' => 'Support',
            'parent' => 22,
        ];
        $results[] = (object)[
            'id' => 25,
            'name' => 'Treatment and Prevention Services',
            'slug' => 'treatment-prevention',
            'parent' => 22,
        ];
        $results[] = (object)[
            'id' => 26,
            'name' => 'Medical Research',
            'slug' => 'Research',
            'parent' => 22,
        ];

        $results[] = (object)[
            'id' => 27,
            'name' => 'Human and Civil Rights',
            'slug' => 'human-rights',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 28,
            'name' => 'Advocacy and Education',
            'slug' => 'advocacy-education',
            'parent' => 27,
        ];

        $results[] = (object)[
            'id' => 29,
            'name' => 'Human Services',
            'slug' => 'human-services',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 30,
            'name' => "Children's and Family Services",
            'slug' => 'children-family',
            'parent' => 29,
        ];
        $results[] = (object)[
            'id' => 31,
            'name' => 'Youth Development, Shelter, and Crisis Services',
            'slug' => 'youth',
            'parent' => 29,
        ];
        $results[] = (object)[
            'id' => 32,
            'name' => 'Food Banks, Food Pantries, and Food Distribution',
            'slug' => 'food',
            'parent' => 29,
        ];
        $results[] = (object)[
            'id' => 33,
            'name' => 'Multipurpose Human Service Organizations',
            'slug' => 'multipurpose',
            'parent' => 29,
        ];
        $results[] = (object)[
            'id' => 34,
            'name' => 'Homeless Services',
            'slug' => 'homeless',
            'parent' => 29,
        ];
        $results[] = (object)[
            'id' => 35,
            'name' => 'Social Services',
            'slug' => 'social',
            'parent' => 29,
        ];

        $results[] = (object)[
            'id' => 36,
            'name' => 'International',
            'slug' => 'international',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 37,
            'name' => 'Development and Relief Services',
            'slug' => 'development-relief',
            'parent' => 36,
        ];
        $results[] = (object)[
            'id' => 38,
            'name' => 'International Peace, Security, and Affairs',
            'slug' => 'peace-security',
            'parent' => 36,
        ];
        $results[] = (object)[
            'id' => 39,
            'name' => 'Humanitarian Relief Supplies',
            'slug' => 'relief',
            'parent' => 36,
        ];
        $results[] = (object)[
            'id' => 40,
            'name' => 'Single Country Support Organizations',
            'slug' => 'country-support',
            'parent' => 36,
        ];
        $results[] = (object)[
            'id' => 41,
            'name' => 'Research and Public Policy',
            'slug' => 'research',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 42,
            'name' => 'Non-Medical Science & Technology Research',
            'slug' => 'science-technology',
            'parent' => 41,
        ];
        $results[] = (object)[
            'id' => 43,
            'name' => 'Social and Public Policy Research',
            'slug' => 'social',
            'parent' => 41,
        ];

        $results[] = (object)[
            'id' => 44,
            'name' => 'Religion',
            'slug' => 'religion',
            'parent' => 0,
        ];
        $results[] = (object)[
            'id' => 45,
            'name' => 'Religious Activities',
            'slug' => 'activities',
            'parent' => 44,
        ];
        $results[] = (object)[
            'id' => 46,
            'name' => 'Religious Media and Broadcasting',
            'slug' => 'media',
            'parent' => 44,
        ];

        $resp = (object)[
            'status' => 'OK',
            'results' => $results,
        ];
        return $this->json($resp);
    }
}
