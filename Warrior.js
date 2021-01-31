// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

class Warrior {
  
  constructor() {
    this._minExperience = 100;
    this._maxExperience = 10000;
  
    this._minLevel = 1;
    this._maxLevel = 100;
    this._stepLevel = 100;
  
    this._minRank = "Pushover";
    this._maxRank = "Greatest";
    this._stepRank = 10;
    this._ranks = [
      "Pushover", 
      "Novice", 
      "Fighter", 
      "Warrior", 
      "Veteran", 
      "Sage", 
      "Elite", 
      "Conqueror", 
      "Champion", 
      "Master", 
      "Greatest"
    ];
    
    this._experience = this._minExperience;
    this._level = this._minLevel;
    this._rank = this._minRank;
    this._achievements = [];
  }
  
  // Private methods
  
  _defineLevelByExperience(experience) {
    return Math.floor(experience / this._stepLevel);
  }
  
  _defineRankByLevel(level) {
    return this._ranks[Math.floor(level / this._stepRank)];
  }
  
  _setExperience(value) {
    if ((this._experience + value) > this._maxExperience) {
      this._experience = this._maxExperience;
    } else {
      this._experience += value;
    }
    this._setLevel(this._defineLevelByExperience(this._experience));
    this._setRank(this._defineRankByLevel(this._level));
  }
  
  _setLevel(value) {
    this._level = value;
  }
  
  _setRank(value) {
    this._rank = value;
  }
  
  _setAchievement(value) {
    this._achievements = [...this._achievements, value];
  }
  
  // Public methods
  
  experience() {
    return this._experience;
  }
  
  level() {
    return this._level;
  }
  
  rank() {
    return this._rank;
  }
  
  battle(enemyLevel) {
    const level = this._level;
    const rank = this._rank;
    const enemyRank = this._defineRankByLevel(enemyLevel);
    
    if (enemyLevel > this._maxLevel || enemyLevel < this._minLevel) {
      return "Invalid level";
    }
    
    if (level === enemyLevel) {
      this._setExperience(10);
    }
    
    if ((level - enemyLevel) === 1) {
      this._setExperience(5);
    }
    
    if ((level - enemyLevel) > 1) {
      this._setExperience(0);
    }
    
    if ((enemyLevel - level) > 0) {
      const diff = enemyLevel - this._level;
      const rankIndex = this._ranks.findIndex(item => item === rank);
      const enemyRankIndex = this._ranks.findIndex(item => item === enemyRank);
      
      if (rankIndex < enemyRankIndex && diff >= 5) {
        return "You've been defeated";
      }
      
      this._setExperience(20 * diff * diff);
    }
    
    // Return success message
    
    if ((level - enemyLevel) >= 2) {
      return "Easy fight";
    }
    
    if ((level - enemyLevel) >= 0 && (level - enemyLevel) <= 1) {
      return "A good fight";
    }
    
    if ((level - enemyLevel) < 0) {
      return "An intense fight";
    }
  }
  
  achievements() {
    return this._achievements;
  }
  
  training([description, points, minLevel]) {
    if (minLevel > this._level) {
      return "Not strong enough";
    }
    this._setAchievement(description);
    this._setExperience(points);
    return description;
  }
  
}
