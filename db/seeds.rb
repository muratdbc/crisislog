# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


[[37.424243, -122.083628],
[37.419812, -122.077963],
[37.429628, -122.077105],
[37.522232, -122.013397],
[37.532850, -122.033997],
[37.529379, -122.013140],
[37.533871, -122.013311],
[37.804070, -122.411351],
[37.804816, -122.405515],
[37.805358, -122.416158],
[37.794372, -122.404056],
[37.805494, -122.405171],
[37.799594, -122.406459],
[37.805291, -122.405000],
[37.798644, -122.399678],
[37.804545, -122.408176]].each { |location|
  Location.create(:lat=> location[0],:long=>location[1])
}
