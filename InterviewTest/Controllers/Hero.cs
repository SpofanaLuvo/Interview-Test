﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewTest.Controllers
{
    public interface IHero
    {
        string name { get; set; }
        string power { get; set; }
        List<KeyValuePair<string, int>> stats { get; set; }
        void evolve(int statIncrease = 5);
    }

    public class Hero : IHero
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats { get; set; }

        public void evolve(int statIncrease = 5)
        {
            for (int i = 0; i < stats.Count; i++)
            {
                KeyValuePair<string, int> stat = stats[i];
                int updatedValue = stat.Value + (stat.Value / 2) * statIncrease;
                stats[i] = new KeyValuePair<string, int>(stat.Key, updatedValue);
            }
        }
    }
}
