const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
    cardios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio"
    }
    ], 
    resistances: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;